# ComplianceDisclose200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ComplianceDisclose200ResponseData**](ComplianceDisclose200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.compliance_disclose200_response import ComplianceDisclose200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDisclose200Response from a JSON string
compliance_disclose200_response_instance = ComplianceDisclose200Response.from_json(json)
# print the JSON string representation of the object
print(ComplianceDisclose200Response.to_json())

# convert the object into a dict
compliance_disclose200_response_dict = compliance_disclose200_response_instance.to_dict()
# create an instance of ComplianceDisclose200Response from a dict
compliance_disclose200_response_from_dict = ComplianceDisclose200Response.from_dict(compliance_disclose200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


