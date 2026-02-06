# GetComplianceReport200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetComplianceReport200ResponseData**](GetComplianceReport200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_compliance_report200_response import GetComplianceReport200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetComplianceReport200Response from a JSON string
get_compliance_report200_response_instance = GetComplianceReport200Response.from_json(json)
# print the JSON string representation of the object
print(GetComplianceReport200Response.to_json())

# convert the object into a dict
get_compliance_report200_response_dict = get_compliance_report200_response_instance.to_dict()
# create an instance of GetComplianceReport200Response from a dict
get_compliance_report200_response_from_dict = GetComplianceReport200Response.from_dict(get_compliance_report200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


