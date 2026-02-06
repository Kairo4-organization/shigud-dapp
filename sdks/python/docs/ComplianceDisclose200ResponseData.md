# ComplianceDisclose200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disclosure_id** | **str** |  | [optional] 
**scoped_viewing_key_hash** | **str** |  | [optional] 
**ciphertext** | **str** |  | [optional] 
**nonce** | **str** |  | [optional] 
**scope** | **object** |  | [optional] 
**auditor_verified** | **bool** |  | [optional] 
**disclosed_at** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.compliance_disclose200_response_data import ComplianceDisclose200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDisclose200ResponseData from a JSON string
compliance_disclose200_response_data_instance = ComplianceDisclose200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ComplianceDisclose200ResponseData.to_json())

# convert the object into a dict
compliance_disclose200_response_data_dict = compliance_disclose200_response_data_instance.to_dict()
# create an instance of ComplianceDisclose200ResponseData from a dict
compliance_disclose200_response_data_from_dict = ComplianceDisclose200ResponseData.from_dict(compliance_disclose200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


